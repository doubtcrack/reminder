import "../global.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import hey from "../assets/hey_icon.json";
import Lottie from "react-lottie";

const Reminder = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hey,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();
  const [reminderList, setReminderList] = useState([]);

  useEffect(() => {
    axios
      .get("https://reminder-backend-twilio.herokuapp.com/getAllReminder")
      .then((res) => setReminderList(res.data));
  }, []);

  const addReminder = () => {
    axios
      .post("https://reminder-backend-twilio.herokuapp.com/addReminder", {
        reminderMsg,
        remindAt,
      })
      .then((res) => setReminderList(res.data));
    setReminderMsg("");
    setRemindAt();
  };

  const deleteReminder = (id) => {
    axios
      .post("https://reminder-backend-twilio.herokuapp.com/deleteReminder", {
        id,
      })
      .then((res) => setReminderList(res.data));
  };

  return (
    <section className="services section-bg">
      <div className="section-title">
        <h2>Services</h2>
        <p>
          Here is our remider. A Reminder to remind you any task you scheduled
          previously with us via a whatsapp notification.
        </p>
      </div>
      <div className="service_box">
        <div className="homepage">
          <div className="homepage_header">
            <h1>
              Remind Me{" "}
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                className="lottie"
              />
            </h1>
            <input
              type="text"
              placeholder="Reminder notes here..."
              value={reminderMsg}
              onChange={(e) => setReminderMsg(e.target.value)}
            />
            <DateTimePicker
              value={remindAt}
              onChange={setRemindAt}
              minDate={new Date()}
              minutePlaceholder="mm"
              hourPlaceholder="hh"
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
            />
            <div className="button" onClick={addReminder}>
              Add Reminder
            </div>
          </div>

          <div className="homepage_body">
            {reminderList.map((reminder) => (
              <div className="reminder_card" key={reminder._id}>
                <h2>{reminder.reminderMsg}</h2>
                <h3>Remind Me at:</h3>
                <p>
                  {String(
                    new Date(
                      reminder.remindAt.toLocaleString(undefined, {
                        timezone: "Asia/Kolkata",
                      })
                    )
                  )}
                </p>
                <div
                  className="button"
                  onClick={() => deleteReminder(reminder._id)}
                >
                  Delete
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reminder;
