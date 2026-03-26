import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

type ClassEntry = {
  time: string;
  name: string;
  location: string;
};

type DaySchedule = {
  day: string;
  classes: ClassEntry[];
};

const timetableData: DaySchedule[] = [
  {
    day: "Monday",
    classes: [
      { time: "4:00pm - 4:45pm", name: "Musical Theatre", location: "The Hockley Centre, Poynton" },
      { time: "4:45pm - 5:30pm", name: "Musical Theatre Senior", location: "The Hockley Centre, Poynton" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "5:15pm - 6:45pm", name: "Grade 4 Tap, Grade 4 Ballet, Grade 4 Modern", location: "Sylvia Roberts Guide Hall, Heald Green" },
      { time: "6:45pm - 8:15pm", name: "Intermediate Ballet, Tap, Modern", location: "Sylvia Roberts Guide Hall, Heald Green" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "3:45pm - 5:15pm", name: "Grade 3 Tap, Grade 3 Ballet, Grade 3 Modern", location: "The Hockley Centre, Poynton" },
      { time: "4:30pm - 6:00pm", name: "Grade 2 Tap, Grade 1 Ballet and Modern", location: "The Hockley Centre, Poynton" },
      { time: "5:15pm - 6:45pm", name: "Grade 4 Tap, Grade 4 Ballet, Grade 4 Modern", location: "The Hockley Centre, Poynton" },
      { time: "6:45pm - 7:45pm", name: "RAD Intermediate Foundation", location: "The Hockley Centre, Poynton" },
      { time: "7:30pm - 8:15pm", name: "RAD Intermediate", location: "The Hockley Centre, Poynton" },
      { time: "8:15pm - 9:00pm", name: "Advanced RAD", location: "The Hockley Centre, Poynton" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "9:30am - 10:15am", name: "Boogie Babes", location: "St John's Church, Knutsford Rd" },
      { time: "5:30pm - 6:15pm", name: "Musical Theatre and Stretch", location: "Sylvia Roberts Guide Hall, Heald Green" },
      { time: "6:15pm - 7:00pm", name: "Intermediate Street", location: "Sylvia Roberts Guide Hall, Heald Green" },
      { time: "7:00pm - 7:45pm", name: "Senior Street", location: "Sylvia Roberts Guide Hall, Heald Green" },
      { time: "7:45pm - 8:30pm", name: "Senior Musical Theatre and Stretch", location: "Sylvia Roberts Guide Hall, Heald Green" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "8:45am - 10:00am", name: "Pre Junior Stars (Ballet, Tap & Modern)", location: "Outwood Primary School, Heald Green" },
      { time: "8:45am - 9:30am", name: "Mini Stars (Ballet & Tap)", location: "The Hockley Centre, Poynton" },
      { time: "8:45am - 10:15am", name: "Grade 2 Tap, Ballet and Modern", location: "Outwood Primary School" },
      { time: "9:45am - 10:45am", name: "Little Stars (Ballet, Tap & Modern)", location: "The Hockley Centre, Poynton" },
      { time: "10:05am - 11:20am", name: "Junior Stars (Ballet, Tap & Modern)", location: "Outwood Primary School, Heald Green" },
      { time: "10:50am - 12:15pm", name: "Pre Junior Stars (Ballet, Tap & Modern)", location: "The Hockley Centre, Poynton" },
      { time: "10:50am - 12:15pm", name: "Junior Stars (Ballet, Tap & Modern)", location: "The Hockley Centre, Poynton" },
      { time: "11:30am - 12:30pm", name: "Little Stars (Ballet, Tap & Modern)", location: "Outwood Primary School, Heald Green" },
      { time: "12:15pm - 1:00pm", name: "Junior Street", location: "The Hockley Centre, Poynton" },
      { time: "12:15pm - 1:00pm", name: "Intermediate Street", location: "The Hockley Centre, Poynton" },
      { time: "12:45pm - 1:30pm", name: "Mini Stars (Ballet & Tap)", location: "Outwood Primary School, Heald Green" },
      { time: "1:00pm - 1:45pm", name: "Senior Street", location: "The Hockley Centre, Poynton" },
    ],
  },
];

const allLocations = [...new Set(timetableData.flatMap((d) => d.classes.map((c) => c.location)))];

const TimetableView = () => {
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredDays = timetableData
    .filter((d) => selectedDay === "all" || d.day === selectedDay)
    .map((d) => ({
      ...d,
      classes: d.classes.filter((c) => selectedLocation === "all" || c.location === selectedLocation),
    }))
    .filter((d) => d.classes.length > 0);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex-1">
          <label className="block text-sm font-body font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Filter by Day
          </label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            <option value="all">All Days</option>
            {timetableData.map((d) => (
              <option key={d.day} value={d.day}>{d.day}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-body font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Filter by Location
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            <option value="all">All Locations</option>
            {allLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Timetable */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedDay}-${selectedLocation}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-10"
        >
          {filteredDays.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-12">No classes match your filters.</p>
          ) : (
            filteredDays.map((day) => (
              <div key={day.day}>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4 pb-2 border-b-2 border-primary/30">
                  {day.day}
                </h3>
                <div className="space-y-3">
                  {day.classes.map((cls, i) => (
                    <div
                      key={`${day.day}-${i}`}
                      className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 sm:w-48 shrink-0">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-body text-sm font-semibold text-charcoal">{cls.time}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-body font-semibold text-foreground">{cls.name}</p>
                      </div>
                      <div className="flex items-center gap-2 sm:w-72 shrink-0">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-body text-sm text-muted-foreground">{cls.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TimetableView;
