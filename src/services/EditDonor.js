

export default EditDonor = async (name,nic,contactNumber,district,division,availability,Token) => {


    var URL = "http://localhost:8081/bloodlife/Api/EditDonorApi.php";
  
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`,
        },
        body: JSON.stringify({
            name : name,
            nic  : nic,
            contactNumber : contactNumber,
            district : district,
            division : division,
            availability : availability,
    
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