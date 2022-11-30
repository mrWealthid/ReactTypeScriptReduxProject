import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";

import {
  UserManagement,
  SingleProfile,
  Overview,
  SharedLayout,
  Verification,
  ReservationHistory,
  SingleView,
  RoleDetails,
} from "./pages/Index";
import Reservation from "./pages/Reservation/Reservation";

function App() {
  return (
    <Routes>

      <Route path='' element ={<Test/>}/>
      <Route path="admin" element={<SharedLayout />}>
        <Route index element={<Overview />} />
        <Route path="user" element={<UserManagement />} />
        <Route path="user/:id" element={<SingleProfile />} />
        <Route path="user/roles/:id" element={<RoleDetails />} />

        <Route path="verification/hotels" element={<Verification />} />
        <Route path="verification" element={<Verification />} />
        <Route path="verification/hotels/:id" element={<SingleView />} />
        <Route path="verification/apartments" element={<Verification />} />
        <Route path="verification/photography" element={<Verification />} />
        <Route path="verification/experience" element={<Verification />} />
        <Route path="verification/restaurants" element={<Verification />} />
        <Route path="verification/workspaces" element={<Verification />} />

        <Route path="reservation" element={<Reservation />} />
        <Route path="reservation/:id" element={<ReservationHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
