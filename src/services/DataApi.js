import React, {useState, useEffect} from 'react';
import axios from 'axios';
let dropdownData = [];
let subscriptionData = [];
function DataApi() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://random-data-api.com/api/users/random_user?size=30')
      .then(response => {
        setPosts(response.data);
        dropdownData = response.data;
        response.data.map(d => {
        subscriptionData.push(d.subscription)
        });
        const key = 'plan';
        subscriptionData = [...new Map(subscriptionData.map(item =>
                            [item[key], item])).values()];
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filerById = (id) => {
    const filterData = dropdownData.filter((s) => s.id === id);
    setPosts(filterData)
  }

  const filerByPlan = (plan) => {
    const filterData = dropdownData.filter((s) => s.subscription.plan === plan);
    setPosts(filterData)
  }

  return (
    <>
    <div className='containr'>
        <div className="dropdown my-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by ID
          </button>
          <ul className="dropdown-menu">
            {dropdownData.map(post => (
              <li><a className="dropdown-item" onClick={() => filerById(post.id)}>{post.id}</a></li>
            ))}
          </ul>
    </div>

    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter by subscription
      </button>
      <ul className="dropdown-menu">
      {subscriptionData.map(post => (
        <li><a className="dropdown-item" onClick={() => filerByPlan(post.plan)}>{post.plan}</a></li>
      ))}
      </ul>
    </div>
    </div>

    <table className="table">
      <thead>
        <tr>
          <th>Company ID</th>
          <th>Username</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
              {posts.map(post => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.username}</td>
                  <td>{post.gender}</td>
                  <td>{post.email}</td>
                </tr>
            ))}
      </tbody>
    </table>
  </>
  )
}

export default DataApi