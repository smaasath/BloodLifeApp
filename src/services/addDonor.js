

export default addDonor = async (name,dob,nic,contactNumber,district,division,email,password,bloodbank) => {


    var URL = "http://localhost:8081/bloodlife/Api/DonorRegister.php";
  
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : name,
            dob  : dob,
            nic  : nic,
            contactNumber : contactNumber,
            district : district,
            division : division,
            email : email,
            password : password,
            bloodbank : bloodbank
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