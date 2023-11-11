

export default LoginUser = async (email,password) => {


    var URL = "http://localhost:8081//bloodlife/Api/login.php";
  
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
  
        },
        body: JSON.stringify({
            email : email,
            password : password
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };