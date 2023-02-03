const fetch = require("node-fetch");
const BASE_URL = "http://localhost:8080";
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
})

export async function getDataArgenBtc() {
  const res = await fetch(`${BASE_URL}/alumnos`,{agent});
  const data = await res.json()
  return  {data} ;
}

export async function getDataEvents() {
  const res = await fetch(`${BASE_URL}/eventos`,{agent});
  let new_data = await res.json();
  return { new_data: new_data.data };
}

export async function getDetails(slug) {
  const res = await fetch(`${BASE_URL}/eventos/${slug}`,{agent});
  let data_detail_event = await res.json();
  return { data_detail_event  };
}

export async function getPerson() {
  const res = await fetch(`${BASE_URL}/personas`,{agent});
  let person = await res.json();
  return { person };
}


export async function getPersonDetails(slug) {
  const res = await fetch(`${BASE_URL}/personas/${slug}`,{agent});
  let data_detail_person = await res.json();
  return { data_detail_person };
}