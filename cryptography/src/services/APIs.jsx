const baseURL = "/api/";

export async function Encryption_AES256CBC({ data }) {
  const URL = baseURL + "aes-encryption";

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      enc: true,
      data,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const resposnse = await fetch(URL, requestOptions);
    const jsonResponse = await resposnse.json();
    console.log(jsonResponse);

    return { status: 200, ...jsonResponse };
  } catch (error) {
    console.error(error);
    return {
      status: 503,
      error: error || "Unexpected Error!",
    };
  }
}

export async function Decryption_AES256CBC({ data, key }) {
  const URL = baseURL + "aes-encryption";

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      enc: false,
      data,
      key,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const resposnse = await fetch(URL, requestOptions);
    const jsonResponse = await resposnse.json();
    console.log(jsonResponse);
    return {
      status: 200,
      ...jsonResponse,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 503,
      error: error || "Unexpected Error!",
    };
  }
}
