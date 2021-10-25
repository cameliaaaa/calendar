import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactWrapper } from "./style";
import Nav from "./nav";
import Contact from "./contact";
import Group from "./group";
import Calendar1 from "../main/Calendar1";
import EventForm from "../forms/EventForm";

const grouplist = [
  {
    name: "Family",
    members: [
      {
        name: "John Wick",
        profile: "/images/contactProfiles/dad.png",
        company: "xxxxxxxx",
        email: "xxxxxxxx",
        phone: "xxxxxxxx",
        mobile: "xxxxxxxx",
        address: "xxxxxxxx",
        birthday: "xxxxxxxx",
        relationship: "xxxxxxxx",
      },
      {
        name: "Andrew Davis",
        profile: "/images/contactProfiles/emma.png",
        company: "xxxxxxxx",
        email: "xxxxxxxx",
        phone: "xxxxxxxx",
        mobile: "xxxxxxxx",
        address: "xxxxxxxx",
        birthday: "xxxxxxxx",
        relationship: "xxxxxxxx",
      },
      {
        name: "Jack Xin",
        profile: "/images/contactProfiles/granddad.png",
        company: "xxxxxxxx",
        email: "xxxxxxxx",
        phone: "xxxxxxxx",
        mobile: "xxxxxxxx",
        address: "xxxxxxxx",
        birthday: "xxxxxxxx",
        relationship: "xxxxxxxx",
      },
    ],
  },
  {
    name: "Company",
    members: [],
  },
  {
    name: "Club",
    members: [],
  },
  {
    name: "School",
    members: [],
  },
];
const contactlist = [
  {
    name: "Dad",
    profile: "/images/contactProfiles/dad.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Emma",
    profile: "/images/contactProfiles/emma.png",
    company: "xxxxxxxx",
    email: "2198434593",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Grand dad",
    profile: "/images/contactProfiles/granddad.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Grand mom",
    profile: "/images/contactProfiles/grandmom.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Mom",
    profile: "/images/contactProfiles/mom.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Sophia",
    profile: "/images/contactProfiles/sophia.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Wife",
    profile: "/images/contactProfiles/wife.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
  {
    name: "Zoey",
    profile: "/images/contactProfiles/zoey.png",
    company: "xxxxxxxx",
    email: "xxxxxxxx",
    phone: "xxxxxxxx",
    mobile: "xxxxxxxx",
    address: "xxxxxxxx",
    birthday: "xxxxxxxx",
    relationship: "xxxxxxxx",
  },
];

const Main = () => {
  const [group, setGroup] = useState(grouplist);

  const [contact, setContact] = useState(contactlist);

  return (
    <Router>
      <ContactWrapper>
        <Nav />
        <Route path="/contact">
          <Contact contact={contact} setContact={setContact} />
        </Route>
        <Route path="/group">
          <Group
            group={group}
            contact={contact}
            setGroup={setGroup}
            setContact={setContact}
            grouplist={grouplist}
          />
        </Route>
        <Route path="/calendar" exact component={Calendar1} />
        <Route path="/form" exact component={EventForm} />
      </ContactWrapper>
    </Router>
  );
};

export default Main;