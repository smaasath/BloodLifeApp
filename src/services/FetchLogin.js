// api.js

export async function fetchData(username, password) {
    const URL = "http://localhost:8081//bloodlife/Api/login.php";
  
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  
    const Data = {
      UserName: username,
      password: password,
    };
  
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      });
  
      if (!response.ok) {
        throw new Error("Something Went Wrong !! Try Again");
      }
  
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  