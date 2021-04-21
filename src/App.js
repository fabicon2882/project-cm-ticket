import './App.css';
import { DefaultLayout } from './components/layout/DefaultLayout';
import { Ticket } from './pages/ticket/Ticket.page';
//import { Dashboard } from './pages/dashboard/Dashboard.page';
//import { Entry } from './pages/entry/Entry.page';
// /import { AddTicket } from './pages/new-ticket/AddTicket.page';
//import { TicketLists } from './pages/ticket-list/TicketLists.page';


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
