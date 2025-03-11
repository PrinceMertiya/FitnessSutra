exports.getDashboardData = async (req, res) => {
    try {
      res.json({ message: `Welcome ${req.user.name}, here is your dashboard data.` });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching dashboard data' });
    }
  };
  