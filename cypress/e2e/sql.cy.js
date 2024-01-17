describe('connect to test db', () => {
  it('can connect to the db', () => {
    cy.task(
      "queryDb",
      "CREATE TABLE Students(StudentID int, FirstName varchar(255), StudentGroup varchar(255), City varchar(255))"
    );
  });

  it("Input entries", () => {
    cy.task("queryDb",
      `INSERT INTO Students (StudentID, FirstName, StudentGroup, City) VALUES
      (1, 'Ivan', '02-2022', 'Barcelona'),
      (2, 'Elena', '02-2022', 'Madrid'),
      (3, 'Alex', '02-2022', 'Barcelona'),
      (4, 'Maria', '02-2022', 'Madrid'),
      (5, 'Dmitriy', '02-2022', 'Barcelona');`
    );
  });

  it('can fetch all students from the group', () => {
    cy.task('queryDb', 'SELECT * FROM Students WHERE StudentGroup = "02-2022"').then((result) => {
    cy.log(JSON.stringify(result));
    });
    });

  it("can delete the db", () => {
    cy.task("queryDb", "DROP TABLE Students");
  });
});