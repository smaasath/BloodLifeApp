const fetchCamp = async (Token) => {
    const URL = "http://localhost:8081//bloodlife/Api/CampaignApi.php"; 
  
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`,
        },
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
  
  export default fetchCamp;
  