import LeftBar from './components/leftBar';
import TopBar from './components/topbar';
import './components/userInfo';
import UserInfo from './components/userInfo';
import Box from '@mui/material/Box';
import ProjectsList from './components/projectList';

function App() {
  return (
    <div>
      <LeftBar />
      <Box sx={{ marginLeft: '280px' }}>
        <TopBar />
        <Box sx={{ padding: '20px' }}>
          <ProjectsList />
        </Box>
      </Box>
    </div>
  );
}

export default App;
