const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());

// MySQL connection
const connection = mysql.createConnection({
  host: 'host',
  user: 'user',
  password: 'password',
  database: 'database',
});


// API endpoints for users
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      res.status(500).json({ error: 'Error fetching data from MySQL' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/users/:uid', (req, res) => {
    const uid = req.params.uid;
    const query = 'SELECT * FROM users WHERE uid = ?';
    connection.query(query, [parseInt(uid)], (err, results) => {
        if (err) {
          console.error('Error fetching data from MySQL:', err);
          res.status(500).json({ error: 'Error fetching data from MySQL' });
        } else {
          if (results.length === 0) {
            res.status(404).json({ error: 'Data not found' });
          } else {
            res.json(results[0]);
          }
        }
      });
  });

  app.get('/api/users/login/:username', (req, res) => {
    const username = req.params.username;
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (err, results) => {
        if (err) {
          console.error('Error fetching data from MySQL:', err);
          res.status(500).json({ error: 'Error fetching data from MySQL' });
        } else {
          if (results.length === 0) {
            res.status(404).json({ error: 'Data not found' });
          } else {
            res.json(results[0]);
          }
        }
      });
  });

// API endpoints for posts
app.get('/api/posts', (req, res) => {
    const query = 'SELECT * FROM posts';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ error: 'Error fetching data from MySQL' });
      } else {
        res.json(results);
      }
    });
});

app.get('/api/posts/:pid', (req, res) => {
    const pid = req.params.pid;
    const query = 'SELECT * FROM posts WHERE uid = ?';
    connection.query(query, [parseInt(pid)], (err, results) => {
        if (err) {
          console.error('Error fetching data from MySQL:', err);
          res.status(500).json({ error: 'Error fetching data from MySQL' });
        } else {
          if (results.length === 0) {
            res.status(404).json({ error: 'Data not found' });
          } else {
            res.json(results[0]);
          }
        }
      });
  });

// API endpoints for replies
app.get('/api/replies', (req, res) => {
    const query = 'SELECT * FROM replies';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ error: 'Error fetching data from MySQL' });
      } else {
        res.json(results);
      }
    });
});

app.get('/api/replies/:pid', (req, res) => {
    const pid = req.params.pid;
    const query = 'SELECT * FROM replies WHERE pid = ?';
    connection.query(query, [parseInt(pid)], (err, results) => {
        if (err) {
          console.error('Error fetching data from MySQL:', err);
          res.status(500).json({ error: 'Error fetching data from MySQL' });
        } else {
        //   if (results.length === 0) {
        //     res.status(404).json({ error: 'Data not found' });
        //   } else {
            
        //   }
          res.json(results);
        }
      });
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
