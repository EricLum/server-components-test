export async function getData(){
    let data = await fetch('http://127.0.0.1:8000/polls/').then(res=>res.json())
    return data
  }
  

const Location = async (props) => {
    let d = await getData()
    return (
      <div>
        {d.location}
      </div>
    )
  }

  export default Location;