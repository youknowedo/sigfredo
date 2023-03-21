const projectsWrapper = document.getElementById("projects");

let allProjects = [];
fetch("./projects.json").then((r) => {
  r.json().then((projects) => {
    console.log(projects);
    allProjects = projects;

    generateItems(projects);
  });
});

const generateItems = (projects) => {
  if (projects.length) {
    for (const project of projects) {
      const item = projectsWrapper.appendChild(document.createElement("div"));
      item.classList.add("project");
      item.onclick = () => (window.location.href = "./" + project.slug);

      const group = item.appendChild(document.createElement("div"));

      const title = group.appendChild(document.createElement("span"));
      title.classList.add("title");
      title.innerText = project.name;

      const description = group.appendChild(document.createElement("p"));
      description.innerText = project.description;

      const course = item.appendChild(document.createElement("span"));
      course.innerText = project.course;
    }
  } else {
    const noFoundText = projectsWrapper.appendChild(
      document.createElement("div")
    );
    noFoundText.id = "noFound";
    noFoundText.innerText = "No projects found.";
  }
};

const searchProjects = (e, searchString) => {
  e.preventDefault();

  searchString = searchString.toLowerCase();

  const result = allProjects.filter((project) => {
    return Object.keys(project).some((key) => {
      return JSON.stringify(project[key])
        .toLowerCase()
        .trim()
        .includes(searchString);
    });
  });

  projectsWrapper.innerHTML = "";
  generateItems(result);
};

document.getElementById("searchIco").onclick = (e) =>
  searchProjects(e, document.getElementById("search").value);
