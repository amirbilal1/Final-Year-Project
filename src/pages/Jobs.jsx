import Hero from "../components/hero";
import Card from "../components/Card";

function Jobs() {
  const jobs = [
    {
      title: "Internal Creative Coordinator",
      company: "Green Group",
      category: "Commerce",
      type: "Full time",
      salary: "$44000-$46000",
      location: "New-York, USA",
      time: "24 min",
    },
    {
      title: "District Intranet Director",
      company: "VonRueden - Weber Co",
      category: "Commerce",
      type: "Full time",
      salary: "$42000-$48000",
      location: "New-York, USA",
      time: "24 min",
    },
    {
      title: "Corporate Tactics Facilitator",
      company: "Cormier, Turner and Flatley Inc",
      category: "Commerce",
      type: "Full time",
      salary: "$38000-$40000",
      location: "New-York, USA",
      time: "26 min",
    },
  ];

  return (
    <>
      <Hero />
      <div className="space-y-6">
      <h1 className="text-center text-xl">Job Listings</h1>
      {jobs.map((job, index) => {
        return <Card key={index} {...job} />;
      })}

      </div>
    </>
  );
  
}

export default Jobs;
