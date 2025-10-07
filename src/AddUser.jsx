const AddUser = ({setUser}) => {
  return (
    <>
      <h1>User Added</h1>
          <input type="text" onChange={(event)=> setUser(event.target.value)} placeholder="Enter Your User Name"/>
          <hr />
    </>
  );
};

export default AddUser;
