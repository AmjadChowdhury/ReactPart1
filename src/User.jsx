export default function User({user}){
    const {name,email} = user
    return (
        <div style={{border: '2px dotted green',borderRadius: '15px',padding: '10px',margin: '10px'}}>
            <h3>Name : {name}</h3>
            <h3>E-mail : {email}</h3>
        </div>
    )
}