import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        console.log('User list:', response.data);
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  const handleDelete = (id) => {
    console.log(`Delete user with ID: ${id}`);
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        alert('User deleted');
        fetchUsers();
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <>
      <style>{`
        .list-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        .list-box {
          width: 90%;
          max-width: 800px;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow-x: auto;
        }
        .list-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
        }
        .user-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .user-table th, .user-table td {
          padding: 12px 16px;
          border-bottom: 1px solid 'black';
        }
        .user-table th {
          background-color: black;
          color: white;
        }
        .user-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .user-table tr:hover {
          background-color: #eef3fa;
        }
        .action-link {
          margin-right: 10px;
          color: black;
          text-decoration: none;
        }
        .action-button {
          color: black;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>

      <div className="list-container">
        <div className="list-box">
          <h2 className="list-title">User List</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id || index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="action-link">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="action-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
