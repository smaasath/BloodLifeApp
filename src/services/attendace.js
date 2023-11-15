const attentence = async (Token,QR) => {
    const URL = "http://localhost:8081/bloodlife/Api/AttendanceApi.php"; 
  
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`,
        },
        body: JSON.stringify({
            AttebdanceId : QR,
    
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
  
  export default attentence;
  