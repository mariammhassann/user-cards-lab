 import './UserCard.css';

 function UserCard({username,role,image}) {
  return (
    <div className="user-card">
   <img src={image} alt={username} className="user-image" />
      <h2>{username}</h2>
      <p>{role}</p>
      
    </div>
  );
 }
 export default UserCard;