

export default fetchLocation = async () => {
    var URL = "http://localhost:8081/bloodlife/Api/DistrictDetails.php";

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  };