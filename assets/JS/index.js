const collectionsQuestions = [
  {
    question: "How many psi do you need to lift 30ft of water in a wet well?",
    Answer: "13 PSI",
  },
  {
    question: "What angle should the bottom of a wet well be?",
    Answer:
      "typically between 1:1 and 2:1 (horizontal to vertical), which translates to a slope of 45 to 26.6 degrees.",
  },
  {
    question:
      " What is the Volume of a cylinder 15ft deep by 50ft diameter if it has 8ft of water ",
    Answer: "117,511",
  },
  {
    question: "What instrument do you use to measure deflection in a pipe?",
    Answer: "A Deflectometer",
  },
  {
    question:
      "How many feet above the trench does your ladder need to be sticking out?",
    Answer: "3FT",
  },
  {
    question:
      "If 2 people are working at $20/hr for 1O hrs/day, for 200days/yr, how much do you need to budget for their salary?",
    Answer:
      "you need to budget $80,000 for the salary of two people working at $20 per hour for 10 hours a day, for 200 days a year.",
  },
  {
    question:
      "If a manhole at point A and a manhole at point B, 430 of distance apart and there's a clog at 150ft, what's the distance from the clog to manhole B?",
    Answer: "The distance from the clog to manhole B is 280ft.",
  },
  {
    question: "How does/when can, H2S occur?",
    Answer:
      "Hydrogen sulfide (H₂S) occurs primarily due to the anaerobic (oxygen-free) decomposition of organic matter by bacteria, often found in swamps, sewers, and industrial processes like petroleum refining and sewage treatment.",
  },
  {
    question:
      "if working on electrical or on a pump, what's the safest way to start maintenance?",
    Answer: "Lock out tag out",
  },
  {
    question:
      "What is made when hydrogen sulfide comes into contact with water?",
    Answer:
      "in water, hydrogen sulfide forms hydrosulfuric acid, which can dissociate to produce hydrogen ions and hydrogen sulfide ions.",
  },
  {
    question:
      "If you do a daily maintenance check on a lift station and the air monitor goes off at 18.2, is that normal, deficient, or over the limit?",
    answer: "Deficient",
  },
  {
    question:
      "When painting a lift station, how should you remove the old layer of rusty stuff?",
    answer: "Sand/primer",
  },
  {
    question: "Locates - what color is industrial color for sewer?",
    answer: "Green",
  },
  {
    question:
      "Before excavating, and your utilities have been located but others haven't, what's the next step?",
    answer: "Wait for others to be located.",
  },
  {
    question:
      "How many people should be present before entering a manhole or wet well?",
    answer: "Two people",
  },
  {
    question: "What permit is needed if your construction site is 3 days long?",
    answer: "Short permit",
  },
  {
    question: "If you close a hydrant too fast, what could happen?",
    answer: "Water hammer can damage pipes.",
  },
  {
    question: "What is the minimum scouring velocity in a gravity sewer line?",
    answer: "2 feet per second (fps)",
  },
  {
    question:
      "Why would you choose different types of pipe? PVC, concrete, HDPE, etc.",
    answer: "Each type has different properties suited for various conditions.",
  },
  {
    question: "What is pipe bursting?",
    answer: "A trenchless method of replacing buried pipelines.",
  },
  {
    question: "What is pipe lining?",
    answer: "Repairing existing pipelines with a resin-saturated tube.",
  },
  {
    question: "What is trenchless excavation?",
    answer: "Construction work that minimizes the need for trenches.",
  },
  {
    question: "What kind of vaccinations should wastewater workers have?",
    answer: "Hep B, tetanus, typhoid, Hep A, polio",
  },
  {
    question:
      "If you don't have a wear ring, what will it affect on a centrifugal pump?",
    answer: "It can decrease efficiency and increase wear.",
  },
  {
    question:
      "If something happens with your pump and you don't know what to do next, should you try to fix it yourself or call tech support?",
    answer: "Call tech support if unsure.",
  },
  {
    question:
      "Who would you use in a situation to troubleshoot a pump? A problem solver, someone who asks for help, or a demanding person?",
    answer: "A problem solver.",
  },
  {
    question: "What happens if you run a pump dry?",
    answer: "It can cause overheating and damage.",
  },
  {
    question: "What's the importance of priming a pump?",
    answer: "To ensure lubrication and cooling, preventing damage.",
  },
  {
    question: "What does FOG stand for?",
    answer: "Fats, Oils, and Grease",
  },
  {
    question: "What is exfiltration?",
    answer: "Sewer coming out of a collection pipe into the soil.",
  },
  {
    question:
      "If you have a clogged manhole, where would be the best point to put the jet rodder?",
    answer: "The next dry manhole.",
  },
  {
    question:
      "A wet well is 10ft x 30ft, if no fluids are moving in and it's pumped down 3ft, how many gallons were pumped out?",
    answer: "Approximately 2,244 gallons.",
  },
  {
    question:
      "Given wet well dimensions, high ball level, low ball level, and it takes 14 minutes to pump capacity, how do you calculate GPM of the pump?",
    answer: "Determine volume between levels and divide by time.",
  },
  {
    question:
      "What should be the minimum slope for a sewer pipe in inches per foot?",
    answer: "1/4 inch per foot",
  },
  {
    question: "What should the % slope be for a sewer pipe?",
    answer: "2%",
  },
  {
    question: "What is a mandrel and what is its purpose?",
    answer: "A device used to test deflection of flexible pipelines.",
  },
  {
    question: "What is bucketing?",
    answer: "A method of cleaning sewer pipes using a bucket machine.",
  },
  {
    question: "What is pigging, also called balling?",
    answer: "A method of cleaning pipes by pushing a 'pig' through.",
  },
  {
    question:
      "Why is using a bubbler not recommended for monitoring a wet well?",
    answer: "Debris accumulates more easily.",
  },
  {
    question: "When would you use shoring?",
    answer: "When excavating trenches deeper than 5 feet.",
  },
  {
    question:
      "How do you determine the volume of a wet well after a certain time with given inflow and outflow rates?",
    answer: "Calculate net flow and adjust initial volume.",
  },
  {
    question:
      "In a force main, where should you put an ARV (Air Release Valve)?",
    answer: "At high points along the pipeline.",
  },
  {
    question:
      "What is the difference between an ARV and a Vacuum Relief Valve?",
    answer:
      "An ARV releases air, while a Vacuum Relief Valve prevents vacuum conditions.",
  },
  {
    question:
      "In a force main, the pressure may be increasing due to which factors?",
    answer: "Pipe diameter, velocity, or increasing friction.",
  },
  {
    question:
      "What is the difference between inflow and infiltration in a sewer system?",
    answer:
      "Inflow is stormwater; infiltration is groundwater entering through cracks.",
  },
  {
    question:
      "What kind of equipment is used for rodding or jetting in sewer maintenance?",
    answer: "Hydraulic, electric, or pneumatic equipment.",
  },
  {
    question: "What is the purpose of the cage around the jet nozzle?",
    answer: "To keep the nozzle centered in the pipe.",
  },
  {
    question:
      "When is the best time to perform a smoke test in a sewer system?",
    answer: "On a clear day with no wind.",
  },
  {
    question:
      "If smoke is introduced at a collection system tap but no smoke appears at manholes, what does this indicate?",
    answer: "No infiltration or inflow issues.",
  },
  {
    question: "What is the purpose of a lift station?",
    answer: "To pump wastewater from lower to higher elevations.",
  },
  {
    question: "What are the key components of a lift station?",
    answer: "Pumps, wet well, control panel, discharge piping.",
  },
  {
    question: "What is the recommended method for inspecting a sewer line?",
    answer: "Using CCTV inspection.",
  },
  {
    question: "What is a common cause of sewer backups?",
    answer: "Root intrusions, grease buildup, or blockages.",
  },
  {
    question: "What are the signs of a failing lift station?",
    answer: "Frequent pump failures, high energy costs, or odor issues.",
  },
  {
    question:
      "What should you do if you encounter a confined space during sewer maintenance?",
    answer: "Follow confined space entry protocols and have a rescue plan.",
  },
  {
    question:
      "If you do a daily maintenance check on a lift station and the air monitor goes off at 18.2, is that normal, deficient, or over the limit?",
    answer: "Over the limit.",
  },
  {
    question:
      "When painting a lift station, how should you remove the old layer of rusty stuff?",
    answer: "Sand/primer.",
  },
  {
    question: "Locates- what color is industrial color for sewer?",
    answer: "Green.",
  },
  {
    question:
      "Before excavating, and your utilities have been located but others haven't, what's the next step?",
    answer: "Wait for others to be located.",
  },
  {
    question:
      "How many people should be present before entering a manhole or wet well?",
    answer: "At least two people.",
  },
  {
    question: "What permit is needed if your construction site is 3 days long?",
    answer: "Short permit.",
  },
  {
    question: "If you close a hydrant too fast, what could happen?",
    answer: "Water hammer could occur.",
  },
  {
    question: "What is the minimum scouring velocity in a gravity sewer line?",
    answer: "Typically 2 ft/s.",
  },
  {
    question: "Why would you choose different types of pipe?",
    answer:
      "Based on material properties, cost, and application (PVC, concrete, HDPE, etc.).",
  },
  {
    question: "What is bursting?",
    answer: "A trenchless method of replacing a pipe by breaking it apart.",
  },
  {
    question: "What is lining?",
    answer:
      "A method to rehabilitate a pipeline by inserting a new liner inside the existing pipe.",
  },
  {
    question: "What is trenchless excavation?",
    answer:
      "A method of installing or repairing underground utilities without extensive digging.",
  },
  {
    question: "What kind of vaccinations should wastewater workers have?",
    answer: "Hepatitis B, tetanus, typhoid, Hepatitis A, and polio.",
  },
  {
    question: "If you don't have a wear ring, what will it affect on a pump?",
    answer: "It can lead to increased wear and reduced efficiency.",
  },
  {
    question:
      "If something happens with your pump and you don't know what to do next?",
    answer: "Try to fix it yourself or call tech support.",
  },
  {
    question:
      "In a troubleshooting situation, who would you use to troubleshoot?",
    answer: "A person who knows how to solve problems.",
  },
  {
    question: "What happens if you run a pump dry?",
    answer: "It can cause damage to the pump.",
  },
  {
    question: "What's the importance of priming a pump?",
    answer: "Priming prevents damage and ensures proper operation.",
  },
  {
    question: "What does FOG stand for?",
    answer: "Fats, Oils, and Grease.",
  },
  {
    question:
      "Exfiltration - what would you call sewer coming out of a collection pipe into the soil?",
    answer: "Exfiltration.",
  },
  {
    question:
      "If you have a clogged manhole, where would be the best point to put the jet rodder?",
    answer: "At the next dry manhole.",
  },
  {
    question:
      "A wet well is loft x 30ft, if no fluids are moving in and it's pumped down 3ft, how many gallons were pumped out?",
    answer: "Calculated based on the volume.",
  },
  {
    question:
      "What should the minimum slope be for sewer pipe in inches per foot?",
    answer: "Typically 1/8 inch per foot.",
  },
  {
    question: "What should the % slope be?",
    answer: "Generally 0.5% to 2%.",
  },
  {
    question: "Mandrel, what is it, what's its purpose?",
    answer: "A tool used to test pipe integrity.",
  },
  {
    question: "Bucketing is a way of cleaning sewer pipes.",
    answer: "True.",
  },
  {
    question: "What is pigging?",
    answer: "Using a device to clean or inspect a pipeline.",
  },
  {
    question: "When would you use shoring, what depths?",
    answer: "Typically over 5 feet deep.",
  },
  {
    question:
      "Give dimensions of a basin or a wet well and say how much flow is coming in.",
    answer: "Depends on specific project data.",
  },
  {
    question: "In a force main, where should you put an ARV?",
    answer: "At high points in the system.",
  },
  {
    question: "Difference between ARV and Vacuum relief valve?",
    answer: "ARV is for pressure relief, VRV is for vacuum conditions.",
  },
  {
    question: "What happens when you close a fire hydrant too quickly?",
    answer: "Potential water hammer and system damage.",
  },
  {
    question: "What is the purpose of a grit chamber in a collection system?",
    answer: "To remove grit and sand from wastewater.",
  },
  {
    question: "What is the purpose of a bar screen in a collection system?",
    answer: "To filter out large solids from wastewater.",
  },
  {
    question: "What is the purpose of a clarifier in a collection system?",
    answer: "To separate solids from liquids by sedimentation.",
  },
  {
    question: "What is the purpose of a digester in a collection system?",
    answer: "To break down organic material.",
  },
  {
    question: "What is the purpose of a centrifuge in a collection system?",
    answer: "To separate solids from liquids using centrifugal force.",
  },
  {
    question:
      "What is the purpose of a dechlorination unit in a collection system?",
    answer: "To remove chlorine before discharge.",
  },
  {
    question: "What is the purpose of an anaerobic digester?",
    answer: "To treat wastewater without oxygen.",
  },
  {
    question: "What is the purpose of a flow equalization basin?",
    answer: "To balance flow rates in the system.",
  },
  {
    question: "What is the purpose of a surge tank in a collection system?",
    answer: "To manage pressure fluctuations.",
  },
  {
    question: "What is the purpose of a sludge thickener?",
    answer: "To increase the solids concentration.",
  },
  {
    question: "What is the purpose of a sludge dewatering device?",
    answer: "To remove water from sludge.",
  },
  {
    question:
      "What is the purpose of a sludge incinerator in a collection system?",
    answer: "To reduce sludge volume and destroy pathogens.",
  },
  {
    question: "Why would you use a sludge incinerator in a collection system?",
    answer: "To minimize waste and recover energy.",
  },
  {
    question: "What is the purpose of a centrifuge in a collection system?",
    answer: "To separate solids from liquids using centrifugal force.",
  },
  {
    question: "Why would you use a centrifuge in a collection system?",
    answer: "To efficiently dewater sludge.",
  },
  {
    question:
      "What is the purpose of a belt filter press in a collection system?",
    answer: "To dewater sludge by applying pressure.",
  },
  {
    question: "Why would you use a belt filter press in a collection system?",
    answer: "To reduce sludge volume before disposal.",
  },
  {
    question:
      "What is the purpose of a gravity thickener in a collection system?",
    answer: "To increase the solids concentration in sludge.",
  },
  {
    question: "Why would you use a gravity thickener in a collection system?",
    answer: "To prepare sludge for further treatment.",
  },
  {
    question:
      "What is the purpose of a dissolved air flotation unit in a collection system?",
    answer: "To remove suspended solids from wastewater.",
  },
  {
    question:
      "Why would you use a dissolved air flotation unit in a collection system?",
    answer: "To enhance the removal of fats, oils, and grease.",
  },
  {
    question:
      "What is the purpose of an aerobic digester in a collection system?",
    answer: "To stabilize organic material using aerobic bacteria.",
  },
  {
    question: "Why would you use an aerobic digester in a collection system?",
    answer: "To reduce odors and improve sludge quality.",
  },
  {
    question:
      "What is the purpose of a primary clarifier in a collection system?",
    answer: "To remove settleable solids from wastewater.",
  },
  {
    question: "Why would you use a primary clarifier in a collection system?",
    answer: "To improve the efficiency of subsequent treatment processes.",
  },
  {
    question:
      "What is the purpose of a secondary clarifier in a collection system?",
    answer: "To separate biological solids from treated wastewater.",
  },
  {
    question: "Why would you use a secondary clarifier in a collection system?",
    answer: "To enhance the quality of effluent discharge.",
  },
  {
    question:
      "What is the purpose of a tertiary clarifier in a collection system?",
    answer: "To further polish treated effluent before discharge.",
  },
  {
    question: "Why would you use a tertiary clarifier in a collection system?",
    answer: "To meet stringent effluent quality standards.",
  },
  {
    question:
      "What is the purpose of a trickling filter in a collection system?",
    answer: "To provide biological treatment of wastewater.",
  },
  {
    question: "Why would you use a trickling filter in a collection system?",
    answer: "To promote aerobic digestion of organic material.",
  },
  {
    question:
      "What is the purpose of an activated sludge system in a collection system?",
    answer: "To treat wastewater using microorganisms.",
  },
  {
    question:
      "Why would you use an activated sludge system in a collection system?",
    answer: "To effectively remove organic matter and nutrients.",
  },
  {
    question:
      "What is the purpose of an oxidation ditch in a collection system?",
    answer: "To provide continuous flow and aeration for wastewater treatment.",
  },
  {
    question: "Why would you use an oxidation ditch in a collection system?",
    answer: "To enhance biological treatment efficiency.",
  },
  {
    question:
      "What is the purpose of a sequencing batch reactor in a collection system?",
    answer:
      "To treat wastewater in batch mode with aeration and settling phases.",
  },
  {
    question:
      "Why would you use a sequencing batch reactor in a collection system?",
    answer: "To maximize treatment flexibility and efficiency.",
  },
  {
    question:
      "What is the purpose of a membrane bioreactor in a collection system?",
    answer: "To combine biological treatment with membrane filtration.",
  },
  {
    question: "Why would you use a membrane bioreactor in a collection system?",
    answer: "To achieve high-quality effluent and reduce footprint.",
  },
  {
    question:
      "What is the purpose of a constructed wetland in a collection system?",
    answer: "To treat wastewater using natural processes.",
  },
  {
    question: "Why would you use a constructed wetland in a collection system?",
    answer: "To enhance water quality in an eco-friendly manner.",
  },
  {
    question: "What is the purpose of a sand filter in a collection system?",
    answer: "To remove suspended solids from wastewater.",
  },
  {
    question: "Why would you use a sand filter in a collection system?",
    answer: "To improve effluent clarity and quality.",
  },
  {
    question:
      "What is the purpose of a rapid sand filter in a collection system?",
    answer: "To provide fast filtration of water or wastewater.",
  },
  {
    question: "Why would you use a rapid sand filter in a collection system?",
    answer: "To efficiently treat large volumes of water.",
  },
  {
    question:
      "What is the purpose of a slow sand filter in a collection system?",
    answer: "To provide biological treatment through a sand layer.",
  },
  {
    question: "Why would you use a slow sand filter in a collection system?",
    answer: "To enhance removal of pathogens and nutrients.",
  },
  {
    question:
      "What is the purpose of a mixed media filter in a collection system?",
    answer: "To improve filtration efficiency using multiple media types.",
  },
  {
    question: "Why would you use a mixed media filter in a collection system?",
    answer: "To capture a wider range of particles.",
  },
  {
    question: "What is the purpose of a biofilter in a collection system?",
    answer: "To treat wastewater using biofilms on a filter medium.",
  },
  {
    question: "Why would you use a biofilter in a collection system?",
    answer: "To enhance the degradation of organic pollutants.",
  },
  {
    question:
      "What is the purpose of a nitrification filter in a collection system?",
    answer: "To convert ammonia into nitrate.",
  },
  {
    question:
      "Why would you use a nitrification filter in a collection system?",
    answer: "To reduce ammonia levels in wastewater.",
  },
  {
    question:
      "What is the purpose of a denitrification filter in a collection system?",
    answer: "To convert nitrate into nitrogen gas.",
  },
  {
    question:
      "Why would you use a denitrification filter in a collection system?",
    answer: "To lower nitrate levels and prevent water pollution.",
  },
  {
    question:
      "What is the purpose of an ion exchange unit in a collection system?",
    answer: "To remove specific ions from wastewater.",
  },
  {
    question: "Why would you use an ion exchange unit in a collection system?",
    answer:
      "To treat wastewater with high concentrations of certain contaminants.",
  },
  {
    question:
      "What is the purpose of an ozone generator in a collection system?",
    answer: "To produce ozone for disinfection and oxidation.",
  },
  {
    question: "Why would you use an ozone generator in a collection system?",
    answer: "To reduce pathogens and improve water quality.",
  },
  {
    question:
      "What is the purpose of an ultraviolet disinfection unit in a collection system?",
    answer: "To disinfect wastewater using UV light.",
  },
  {
    question:
      "Why would you use an ultraviolet disinfection unit in a collection system?",
    answer: "To eliminate harmful microorganisms without chemicals.",
  },
  {
    question:
      "What is the purpose of a chlorine contact tank in a collection system?",
    answer: "To allow for chlorine disinfection of wastewater.",
  },
  {
    question:
      "Why would you use a chlorine contact tank in a collection system?",
    answer: "To ensure adequate contact time for effective disinfection.",
  },
  {
    question:
      "What is the purpose of a dechlorination unit in a collection system?",
    answer: "To remove residual chlorine from treated wastewater.",
  },
  {
    question: "Why would you use a dechlorination unit in a collection system?",
    answer: "To protect aquatic life in receiving waters.",
  },
  {
    question:
      "What is the purpose of a sludge drying bed in a collection system?",
    answer: "To reduce the moisture content of sludge.",
  },
  {
    question: "Why would you use a sludge drying bed in a collection system?",
    answer: "To prepare sludge for more efficient disposal.",
  },
  {
    question:
      "What is the purpose of a composting unit in a collection system?",
    answer: "To convert organic waste into compost.",
  },
  {
    question: "Why would you use a composting unit in a collection system?",
    answer: "To recycle nutrients and reduce waste.",
  },
  {
    question:
      "What is the purpose of a land application system in a collection system?",
    answer: "To use treated sludge as a soil amendment.",
  },
  {
    question:
      "Why would you use a land application system in a collection system?",
    answer: "To enhance soil fertility and reduce landfill use.",
  },
  {
    question: "What is the purpose of a landfill in a collection system?",
    answer: "To dispose of non-recyclable waste.",
  },
  {
    question: "Why would you use a landfill in a collection system?",
    answer: "To safely contain waste materials.",
  },
  {
    question:
      "What is the purpose of a deep well injection system in a collection system?",
    answer: "To dispose of liquid waste underground.",
  },
  {
    question:
      "Why would you use a deep well injection system in a collection system?",
    answer: "To isolate waste from the environment.",
  },
  {
    question: "What is the purpose of an ocean outfall in a collection system?",
    answer: "To discharge treated wastewater into the ocean.",
  },
  {
    question: "Why would you use an ocean outfall in a collection system?",
    answer: "To dilute and disperse treated effluent.",
  },
  {
    question: "What is the purpose of a river outfall in a collection system?",
    answer: "To discharge treated wastewater into a river.",
  },
  {
    question: "Why would you use a river outfall in a collection system?",
    answer: "To return treated water to the natural water cycle.",
  },
  {
    question: "What is the purpose of a pond outfall in a collection system?",
    answer: "To discharge water from a pond system.",
  },
  {
    question: "Why would you use a pond outfall in a collection system?",
    answer: "To manage excess water and maintain pond levels.",
  },
  {
    question: "What is the purpose of a lagoon outfall in a collection system?",
    answer: "To discharge treated water from a lagoon.",
  },
  {
    question: "Why would you use a lagoon outfall in a collection system?",
    answer: "To provide additional treatment through natural processes.",
  },
  {
    question:
      "What is the purpose of a wetland outfall in a collection system?",
    answer: "To discharge treated water into a wetland area.",
  },
  {
    question: "Why would you use a wetland outfall in a collection system?",
    answer: "To enhance natural filtration and habitat.",
  },
  {
    question:
      "What is the purpose of a mechanical bar screen in a collection system?",
    answer: "To remove large debris from wastewater.",
  },
  {
    question:
      "Why would you use a mechanical bar screen in a collection system?",
    answer: "To protect downstream equipment from damage.",
  },
  {
    question: "What is the purpose of a fine screen in a collection system?",
    answer: "To remove smaller particles from wastewater.",
  },
  {
    question: "Why would you use a fine screen in a collection system?",
    answer: "To improve overall treatment efficiency.",
  },
  {
    question: "What is the purpose of a grit separator in a collection system?",
    answer: "To remove sand, grit, and heavy solids.",
  },
  {
    question: "Why would you use a grit separator in a collection system?",
    answer: "To prevent wear on pumps and other equipment.",
  },
  {
    question: "What is the purpose of a grit washer in a collection system?",
    answer: "To clean grit prior to disposal.",
  },
  {
    question: "Why would you use a grit washer in a collection system?",
    answer: "To reduce the volume of material sent to landfill.",
  },
  {
    question:
      "What is the purpose of a grit classifier in a collection system?",
    answer: "To separate grit by size for disposal.",
  },
  {
    question: "Why would you use a grit classifier in a collection system?",
    answer: "To optimize grit disposal processes.",
  },
  {
    question: "What is the purpose of a rotary screen in a collection system?",
    answer: "To remove solids from wastewater using a rotating mechanism.",
  },
  {
    question: "Why would you use a rotary screen in a collection system?",
    answer: "To improve solids removal efficiency.",
  },
  {
    question: "What is the purpose of a microstrainer in a collection system?",
    answer: "To filter fine particles from liquids.",
  },
  {
    question: "Why would you use a microstrainer in a collection system?",
    answer: "To enhance water clarity and quality.",
  },
  {
    question: "What is the purpose of a drum filter in a collection system?",
    answer: "To provide continuous filtration of wastewater.",
  },
  {
    question: "Why would you use a drum filter in a collection system?",
    answer: "To efficiently remove suspended solids.",
  },
  {
    question: "What is the purpose of a disc filter in a collection system?",
    answer: "To filter out fine particles from wastewater.",
  },
  {
    question: "Why would you use a disc filter in a collection system?",
    answer: "To improve effluent quality.",
  },
  {
    question: "What is the purpose of a belt filter in a collection system?",
    answer: "To dewater solids using a continuous belt.",
  },
  {
    question: "Why would you use a belt filter in a collection system?",
    answer: "To enhance sludge dewatering efficiency.",
  },
  {
    question: "What is the purpose of a gravity filter in a collection system?",
    answer: "To remove suspended solids using gravity.",
  },
  {
    question: "Why would you use a gravity filter in a collection system?",
    answer: "To achieve effective solids removal.",
  },
  {
    question:
      "What is the purpose of a pressure filter in a collection system?",
    answer: "To filter liquids under pressure.",
  },
  {
    question: "Why would you use a pressure filter in a collection system?",
    answer: "To enhance filtration speed and efficiency.",
  },
  {
    question: "What is the purpose of a vacuum filter in a collection system?",
    answer: "To remove water from solids using vacuum pressure.",
  },
  {
    question: "Why would you use a vacuum filter in a collection system?",
    answer: "To optimize sludge dewatering.",
  },
  {
    question: "What is the purpose of a belt press in a collection system?",
    answer: "To dewater sludge using mechanical pressure.",
  },
  {
    question: "Why would you use a belt press in a collection system?",
    answer: "To efficiently reduce sludge volume.",
  },
  {
    question: "What is the purpose of a screw press in a collection system?",
    answer: "To mechanically dewater sludge.",
  },
  {
    question: "Why would you use a screw press in a collection system?",
    answer: "To achieve high solids content in the cake.",
  },
  {
    question:
      "What is the purpose of a hydraulic press in a collection system?",
    answer: "To apply high pressure to dewater materials.",
  },
  {
    question: "Why would you use a hydraulic press in a collection system?",
    answer: "To maximize water removal from solids.",
  },
  {
    question: "What is the purpose of a filter press in a collection system?",
    answer: "To separate liquids from solids using pressure.",
  },
  {
    question: "Why would you use a filter press in a collection system?",
    answer: "To produce high-quality dry cake from sludge.",
  },
  {
    question:
      "What is the purpose of a plate and frame filter in a collection system?",
    answer: "To filter liquids and separate solids.",
  },
  {
    question:
      "Why would you use a plate and frame filter in a collection system?",
    answer: "To achieve effective separation and reduce waste.",
  },
  {
    question:
      "What is the purpose of a sludge storage tank in a collection system?",
    answer: "To temporarily store sludge before treatment.",
  },
  {
    question: "Why would you use a sludge storage tank in a collection system?",
    answer: "To manage sludge until processing.",
  },
  {
    question: "What is the purpose of a sludge lagoon in a collection system?",
    answer: "To store and treat sludge in a contained area.",
  },
  {
    question: "Why would you use a sludge lagoon in a collection system?",
    answer: "To utilize natural processes for stabilization.",
  },
  // Add more collection questions here
];

// const waterQualityQuestions = [
//   "What is the pH of a 50% HCl solution?",
//   "What is the color of a 10% HNO3 solution?",
//   "What is the color of a 10% NaOH solution?", ];

const distributionQuestions = [
  {
    question: "What is the cone depression in a well?",
    answer: "A localized drop in water level around a well during pumping.",
  },
  {
    question:
      "A tank is 50ft tall and has a radius of 17ft. What is the volume of the tank?",
    answer: "Volume = π × radius² × height.",
  },
  {
    question:
      "What is the appropriate method for unidirectional flushing in an arterial loop in a branch system?",
    answer:
      "Use a sequence that prevents backflow and ensures full system flushing.",
  },
  {
    question:
      "Dose rate of chlorine tablets for cleaning pipe for installation?",
    answer: "Depends on the pipe volume and desired concentration.",
  },
  {
    question:
      "Where would water quality be most negatively affected in the distribution system, within the grid or branches?",
    answer: "Typically within the branches due to lower flow rates.",
  },
  {
    question:
      "If you're digging a trench, how many feet wide must the trench be compared to the pipe's diameter?",
    answer:
      "The trench should be at least 12 inches wider than the pipe diameter.",
  },
  {
    question:
      "If there is an acute health hazard in the water, how and when should you inform the public?",
    answer:
      "Immediately notify the public via local media and emergency alerts.",
  },
  {
    question:
      "If there is a chronic health hazard in the water, how and when should you inform the public?",
    answer:
      "Inform the public promptly and provide ongoing updates and guidance.",
  },
  {
    question:
      "How many feet in front of an excavation site should traffic signage begin?",
    answer: "At least 100 feet in advance of the site.",
  },
  {
    question: "How many feet apart should traffic signs be?",
    answer: "Generally, 100 to 150 feet apart depending on the situation.",
  },
  {
    question:
      "When cleaning up a worksite, in what order should the cones be removed?",
    answer: "Remove cones from the perimeter inward.",
  },
  {
    question: "What is the best soil type for benching?",
    answer: "Cohesive soils like clay are best for benching.",
  },
  {
    question: "At what depth in a well does the water quality degrade?",
    answer: "Degradation often occurs below the first 10-20 feet.",
  },
  {
    question: "If you add stages for a well, what does this increase?",
    answer: "It increases the well's capacity and efficiency.",
  },
  {
    question:
      "How much concrete will be required to pour an 8ft x 8ft x 6ft pad?",
    answer: "Volume = length × width × height = 384 cubic feet.",
  },
  {
    question:
      "How many 15ft sections of DI pipe would be needed to install a 1000ft run of water line?",
    answer: "Approximately 67 sections.",
  },
  {
    question:
      "If you have a chlorine demand of 1.89mg/L and a residual of .78mg/L, what is your chlorine dose?",
    answer: "Chlorine dose = demand + residual = 2.67 mg/L.",
  },
  {
    question:
      "What type of gas is most hazardous if inhaled? Chlorine, Hydrogen Sulfide, Carbon Monoxide or Ozone?",
    answer: "Hydrogen Sulfide is highly toxic and hazardous.",
  },
  {
    question:
      "How much paint would be needed to cover the sides and top of a 3MG tank?",
    answer: "Calculate surface area and apply coverage rates.",
  },
  {
    question: "What are the 3 components of a shoring system?",
    answer: "Bracing, sheeting, and strutting.",
  },
  {
    question: "What is the most common use for a vertical stem valve?",
    answer: "To regulate flow in water systems.",
  },
  {
    question: "What is the optimal FPS to scour pipes?",
    answer: "Typically around 3 to 5 feet per second.",
  },
  {
    question: "What is Sodium Thiosulfate?",
    answer: "A dechlorination agent used in water treatment.",
  },
  {
    question: "What does temperature do to chloramine formation?",
    answer: "Higher temperatures can increase chloramine degradation.",
  },
  {
    question: "What do TTHMs cause?",
    answer: "Potential health risks, including cancer.",
  },
  {
    question: "How often should you inspect maintenance records?",
    answer: "Regularly, at least annually or biannually.",
  },
  {
    question: "What type of pump is best used in wells?",
    answer: "Submersible pumps are commonly used.",
  },
  {
    question: "What kind of valve is used to stop the water level in a tank?",
    answer: "Float valves are commonly used.",
  },
  {
    question: "Where should ventilation be placed in a chlorine gas room?",
    answer: "Near the ceiling to remove heavy gas.",
  },
  {
    question:
      "What is the proper way to fix a leaking valve on a chlorine cylinder?",
    answer: "Tighten connections and replace seals as needed.",
  },
  {
    question: "How often should you inspect cathodic protection on tanks?",
    answer: "At least annually or as per manufacturer's recommendations.",
  },
  {
    question: "What is the most likely cause for a rattling sound in a pump?",
    answer: "Misalignment or wear on pump components.",
  },
  {
    question: "What causes cavitation?",
    answer: "Pressure drop in the pump leading to vapor bubbles.",
  },
  {
    question:
      "How many 15ft lengths of 18ft pipe will you need to replace 1500ft of line?",
    answer: "You will need 100 lengths of 15ft pipe.",
  },
  {
    question:
      "What pipe material is most likely to corrode? PVC? High density PE or reinforced concrete?",
    answer: "Reinforced concrete is most susceptible to corrosion.",
  },
  {
    question: "What happens when you close a butterfly valve too fast?",
    answer: "It can cause water hammer and damage the system.",
  },
  {
    question: "What effect does pH have on chlorination?",
    answer: "pH levels can affect chlorine's disinfecting efficacy.",
  },
  {
    question:
      "Perimeter fencing in addition to ____ is beneficial to facility security.",
    answer: "Surveillance cameras enhance security.",
  },
  {
    question: "Why is it important to keep maintenance records for pumps?",
    answer: "To ensure reliability and track performance.",
  },
  {
    question:
      "A pump station was upgraded with larger pumps. What else potentially needs to be upgraded?",
    answer: "Piping and electrical systems may need upgrading.",
  },
  {
    question:
      "99 gallons of a chemical solution has a specific gravity of 6.6. It is added to 56 gallons of another solution that has a specific gravity of 4.4. How many pounds of solution do you have?",
    answer: "Calculate using specific gravities and total volume.",
  },
  {
    question:
      "A tank has a pressure transducer that is frozen in ice inside the tank. There is a hydrant nearby with a pressure transducer. How do you find the tank level using the hydrant pressure transducer?",
    answer: "Compare pressures to estimate tank level.",
  },
  {
    question: "What are the purposes of chloramines?",
    answer: "To provide residual disinfection in water systems.",
  },
  {
    question:
      "The paint inside of a tank is chipping. What would adding cathodic protection cause?",
    answer: "It can slow down or prevent further corrosion.",
  },
  {
    question: "A pump and motor are misaligned. What does this cause?",
    answer: "It leads to increased wear and potential failure.",
  },
  {
    question:
      "When detecting leaks in the distribution system, what factors are helpful to know?",
    answer: "Pressure changes and flow rates are critical.",
  },
  {
    question: "What type of toxin is Ricin?",
    answer: "A highly toxic protein derived from castor beans.",
  },
  {
    question: "What is critical when maintaining a chlorine gas room monitor?",
    answer: "Regular calibration and testing are essential.",
  },
  {
    question:
      "What is the maximum draw rate for a 150lb chlorine gas cylinder?",
    answer: "Typically around 40-50 lbs per day.",
  },
  {
    question:
      "Dosing concentrations: you have a chem feed pump doing 75gal per day with 1.5% solution. Water pump is flowing at 500gpm. What is your dose?",
    answer: "Calculate based on flow rates and concentrations.",
  },
  {
    question: "What is the angle at which soils become unstable and collapse?",
    answer: "Typically around 30-45 degrees depending on soil type.",
  },
  {
    question:
      'For a 48" pipe that is 30,000ft long, needs to flow at 3fps, what is flow in pipe?',
    answer: "Calculate flow using cross-sectional area and velocity.",
  },
  {
    question: "Soil stability from least stable to most stable",
    answer: "Sand, silt, clay, gravel.",
  },
  {
    question:
      "Utility buys water at a cost of $2.50/1,000gal. The system has an operating cost of $200k annually, debt service of $300k annually, reserve funds of $100k annually. What is total cost per gallon to the system?",
    answer: "Calculate total costs divided by total gallons purchased.",
  },
  {
    question:
      "Gate valve that is 8ft in diameter, 22ft underwater, how many tons must it be capable of supporting?",
    answer: "Calculate buoyancy and pressure forces.",
  },
  {
    question:
      "Where is the thrust focused based on the flow of water? What's the direction of thrust?",
    answer: "Thrust is focused at bends and changes in direction.",
  },
  {
    question:
      "Soil can support 1,000lb/square foot. The pipe will have force of 5,000lb/square inch, how many cubic feet must the thrust block be?",
    answer: "Calculate based on force distribution.",
  },
  {
    question:
      "Where should the thrust block be? On fitting? On pipe? On virgin soils? On fitting against backfill? On pipe against backfill? On fitting against virgin soils?",
    answer: "On virgin soils to provide stability.",
  },
  {
    question: "Order of operations for creating a vulnerability assessment",
    answer: "Identify threats, assess risks, develop mitigation strategies.",
  },
  {
    question:
      'A pump is pumping 400gpm to a wet well that is 10ft in diameter, another pump is pumping out & lowering the wet well 18"/hr, how many gpm is the pump in the wet well?',
    answer: "Calculate inflow and outflow to find the net rate.",
  },
  {
    question:
      "An operator fills a sample bottle outside in the sun but gets distracted and doesn't take a chlorine residual for a while. Why is the residual lower than expected?",
    answer: "Chlorine can dissipate quickly due to sunlight.",
  },
  {
    question:
      "What should you look out for in the distribution system if you're using this as a disinfectant (chlorite/chlorate)?",
    answer: "Monitor for potential byproducts and residuals.",
  },
  {
    question: "There's vacuum at the injector but no chemical flow, why?",
    answer: "Check for blockages or pump malfunction.",
  },
  {
    question:
      "What are some signs of an unstable trench? Cracking/slumping on the grade adjacent to the trench?",
    answer: "Yes, also look for excessive water accumulation.",
  },
  {
    question:
      "Removing shoring box - once excavation is complete, what order do you take out the shoring box?",
    answer: "Remove from top to bottom carefully.",
  },
  {
    question:
      "What's the most common cause of accidents with operators? Miscommunication? Incorrect tools for the job?",
    answer: "Miscommunication is often the leading cause.",
  },
  {
    question:
      "Three pressure zones are coming into a valve cluster. When you open the middle pressure zone valve to fill a tank, the flows are fine. When you open the lower pressure zone valve, the flows start going way up and the middle pressure zone tank starts to drain. What's the likely cause?",
    answer: "Pressure imbalance between zones.",
  },
  {
    question:
      "What type of flowmeter is best used in a situation where the flow changes very slowly? Mag meter? Positive displacement piston pump?",
    answer: "Positive displacement piston pump is preferred.",
  },
  {
    question:
      "What type of flowmeter must have an insulated pipe? Mag meter? Pulse meter?",
    answer: "Mag meter requires insulation to prevent temperature effects.",
  },
  {
    question: "What does DBP stand for?",
    answer: "Disinfection Byproducts.",
  },
  {
    question:
      "The static water level in a well is dropping, but the dynamic level is remaining the same. What could be the cause of this?",
    answer: "The water table is lowering due to seasonal change.",
  },
  // Add more distribution questions here
];

const pathogensQuestions = [
  {
    question: "cyanobacteria",
    answer:
      "Bacteria. looks like Foam, scum, paint, or mats on surface. blue or blure-green in color can be other colors. produce toxins that make peopple and animals sick. bloom occur in fresh water and salt water, stomach pain headache, neurological symptoms, vomiting, diarrhea and liver damage",
  },
  {
    question: "hepatitis A",
    answer:
      "Virus. from feces of infected people, the virus makes the body produce white blood cells called leukocytes. Can cause yellow skin/eyes, stomach illness, fever, vomiting, dark urine, light-colored feces, joint pain, fatigue.",
  },
  {
    question: "Norovirus.",
    answer:
      "VIRUS. from feces of infected people, gets into water from sewage or polluted runoff, causes diarrhea, vomiting, nausea, stomach illness.",
  },
  {
    question: "Rotavirus.",
    answer:
      " VIRUS. from feces of infected people, gets into water from sewage or polluted runoff. Causes diarrhea, vomiting, fever, stomach illness.",
  },
  {
    question: "Shigella",
    answer:
      "BACTERIA. Found in feces of people, in food or water contaminated by infected people. Bloody Diarrhea, stomach pains, fever.",
  },
];

const acronymsQuestions = [
  {
    question: "pCI",
    answer: "Picocurie. A unit for radionuclides.",
  },
  {
    question: "SW",
    answer: "Surface water.",
  },
  {
    question: "TCR.",
    answer: "Total Coliform Rule.",
  },
  {
    question: "RTCR.",
    answer: "Revised Toyal Coliform Rule.",
  },
  {
    question: "LCR.",
    answer: "Lead and Copper Rule.",
  },
  {
    question: "RLCR.",
    answer: "Revised Lead and Copper Rule.",
  },
  {
    question: "MCL.",
    answer: "Maximum Contaminnation Level.",
  },
  {
    question: "SMCL.",
    answer: "Secondary Maximum Contaminnation Level.",
  },
  {
    question: "TT",
    answer: "Treatment Technique",
  },
  {
    question: "ppb",
    answer: "Parts per Billion.",
  },
  {
    question: "CCR.",
    answer: "Consumer Confidence Report.",
  },
  {
    question: "CPDWR.",
    answer: "Colorado Primary Drinking Water Regulations.",
  },
  {
    question: "SP.",
    answer:
      "Special Purpose water sample. Non-routine, usually used for bacTs, but can be used for other tests.",
  },
  {
    question: "CDC.",
    answer: "Centers for Disease Control and Prevention.",
  },
  {
    question: "CDPHE.",
    answer: "Colorado Department of Public Health and Environment.",
  },
  {
    question: "CT.",
    answer: "Contact Time.",
  },
];

const regulationsQuestions = [
  {
    question: "Chlorine MRDL.",
    answer: "4.0 mg/L",
  },
  {
    question: "Fluoride MCL.",
    answer: " 4.0 mg/L.",
  },
  {
    question: "Fluoride SMCL.",
    answer: "2.0 mg/L.",
  },
];

let randomNumbers = [];
let selectedQuestions = [];

function getRandomNumbers(totalQuestions) {
  const numbers = new Set();

  while (numbers.size < 3) {
    const random = Math.floor(Math.random() * totalQuestions);
    numbers.add(random);
  }

  return Array.from(numbers);
}

function updateCards(event) {
  if (event.target.id === "col1") {
    selectedQuestions = collectionsQuestions;
  } else if (event.target.id === "dis1") {
    selectedQuestions = distributionQuestions;
  } else if (event.target.id === "acr1") {
    selectedQuestions = acronymsQuestions;
  } else if (event.target.id === "path1") {
    selectedQuestions = pathogensQuestions;
  } else if (event.target.id === "reg1") {
    selectedQuestions = regulationsQuestions;
  }

  randomNumbers = getRandomNumbers(selectedQuestions.length);

  document.querySelector("#card1 h1").textContent =
    selectedQuestions[randomNumbers[0]].question;
  document.querySelector("#card2 h1").textContent =
    selectedQuestions[randomNumbers[1]].question;
  document.querySelector("#card3 h1").textContent =
    selectedQuestions[randomNumbers[2]].question;
}

function showAnswer(event) {
  let cardIndex = parseInt(event.currentTarget.id.replace("card", "")) - 1;
  document.querySelector(`#${event.currentTarget.id} h1`).textContent =
    selectedQuestions[randomNumbers[cardIndex]].answer;
}

document.querySelector("#col1").addEventListener("click", updateCards);
document.querySelector("#dis1").addEventListener("click", updateCards);
document.querySelector("#acr1").addEventListener("click", updateCards);
document.querySelector("#path1").addEventListener("click", updateCards);
document.querySelector("#reg1").addEventListener("click", updateCards);
document.querySelector("#card1").addEventListener("click", showAnswer);
document.querySelector("#card2").addEventListener("click", showAnswer);
document.querySelector("#card3").addEventListener("click", showAnswer);
