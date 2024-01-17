describe('connect to test db', () => {
  it('can connect to the db', () => {
    cy.task(
      "queryDb",
      "CREATE TABLE Students(StudentID int, FirstName varchar(255), StudentGroup varchar(255), City varchar(255))"
    );
  });

  it("can delete the db", () => {
    cy.task("queryDb", "DROP TABLE Students");
  });
});