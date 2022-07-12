import { useRouter } from "next/dist/client/router";

// using the specific function called serverside props
export const getServerSideProps = async ({ params }) => {
  // now changing the url
  // getting the api
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.country}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

const country = (data) => {
  const countryCardOuter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor:"#0ad6a0"
  };
  const countrycard_inner = {
    display: "flex",
    /* width: 800px; */
    backgroundColor: "rgb(0, 0, 0)",
    alignItems: "center",
    borderRadius: "20px",
    height: "400px",
  };
  const countryFlag = { height: "100%" };
  const imgflag = {
    height: "100%",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  };
  const countryData = {
    padding: "20px",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
  };
  const sectiom_1 = { color: "white", display: "flex", lineHeight: "5px" };
  const btn={display: 'block',
    margin: 'auto',
    marginTop: '20px',
    backgroundColor: 'black',
    border: '2px solid white',
    color: 'white',
    fontSize: '20px',
    borderRadius: '10px',
    padding: '5px',
    cursor:'pointer',
    marginLeft:'0px'
  }

  const router = useRouter();
  console.log(data.data[0].name.common);
  const d = data.data[0];
  return (
    <div style={countryCardOuter}>
      <div style={countrycard_inner}>
        <div style={countryFlag}>
          <img style={imgflag} src={d.flags.png} />
        </div>
        <div style={countryData}>
          <div style={sectiom_1}>
            <h1>
              {d.name.common},{d.region}
            </h1>
          </div>
          <h2>{d.capital}</h2>
          <p>{d.area} Km2 </p>
          <p>{d.population}</p>
          <button style={btn} onClick={() => router.push({pathname: `/`})}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default country;
