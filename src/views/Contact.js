const Contact = () => {
  return (
    <>
      <div className="container mt-5" style={{ marginBottom: "25px" }}>
        <h1>Contact</h1>
        <br />
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
