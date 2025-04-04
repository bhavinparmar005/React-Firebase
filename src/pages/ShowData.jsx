import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase";


const ShowData = () => {
  let nav = useNavigate();

  const [allData, setAllData] = useState([]);

  
  const getData = async () => {
    let result = await getDocs(collection(db, "contectData"));
    
    let res = result.docs.map((val) => {
      return (({ id: val.id, ...val.data()}))
    });
    
    setAllData(res);
  };
  
  console.log(allData);
  
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "contectData", id))

    getData()

  }
  useEffect(() => {
    getData();
  }, []);

  const EditData = (item) => {
    nav("/editdata", { state: item });
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">All Contect Data</h2>
        <div className="container d-flex justify-content-end mb-2 ">
          <button className="btn btn-dark btn-sm m-2 fs-6 text-light" onClick={() => nav('/')}> Add Contect</button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Massage</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              {
                allData.map((val, index) => {
                  return (
                    <tr key={val.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{val.name}</td>
                      <td> {val.email}</td>
                      <td>{val.phone}</td>
                      <td>{val.address}</td>
                      <td>{val.message}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm m-2"
                          onClick={() => deleteData(val.id)}
                        >
                          Delete{" "}
                        </button>
                        <button
                          className="btn btn-success btn-sm "
                          onClick={() => EditData(val)}
                        >
                          Edit{" "}
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              {/* <tr>
                <th scope="row">1</th>
                <td>parmar</td>
                <td> bhavin@gmail.com</td>
                <td>8000851227</td>
                <td>Amreli</td>
                <td>hello!!</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => deleteData()}
                  >
                    Delete{" "}
                  </button>
                  <button
                    className="btn btn-success btn-sm "
                    onClick={() => EditData()}
                  >
                    Edit{" "}
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowData;
