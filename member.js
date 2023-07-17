function skillsMember() {
    var skills = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 2000,
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (value) {
            this.salary = value;
        },
        getSkills: function () {
            return this.skills;
        },
        addSkills: function (skill) {
            this.skills.push(skill);
        }
    };
    console.log(skills.getSkills());
    skills.addSkills('React');
    console.log(skills.getSkills());
}