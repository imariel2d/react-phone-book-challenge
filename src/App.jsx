const style = {
  table: {
    borderCollapse: "collapse"
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px"
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px"
    },
    inputs: {
      marginBottom: "5px",
      display: "block"
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      color: "#fff"
    }
  }
};

const PhoneBookForm = () => {
  return (
    <form style={style.form.container}>
      <label>First Name </label>
      <br/>

      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
      />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
      />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
      />

      {/* Submit Button */}
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
};

const InformationTable = () => {
  return (
    <table style={style.table} className="informationTable">
      <thead>
      <tr>
        <th style={style.tableCell}>First name</th>
        <th style={style.tableCell}>Last name</th>
        <th style={style.tableCell}>Phone</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td style={style.tableCell}>Coder</td>
        <td style={style.tableCell}>Byte</td>
        <td style={style.tableCell}>+52 6600000000</td>
      </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <section>
      <PhoneBookForm/>
      <hr/>
      <InformationTable/>
    </section>
  );
};

export default App
