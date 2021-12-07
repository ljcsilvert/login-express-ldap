#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------
#------------------------------------------------------------
# Table: team
#------------------------------------------------------------
CREATE TABLE team(
  id_team Int Auto_increment NOT NULL,
  name_team Varchar (200) NOT NULL,
  CONSTRAINT team_PK PRIMARY KEY (id_team)
) ENGINE = InnoDB;
#------------------------------------------------------------
# Table: user
#------------------------------------------------------------
CREATE TABLE user(
  id_user Int Auto_increment NOT NULL,
  pseudo_user Varchar (100) NOT NULL,
  email_user Varchar (300) NOT NULL,
  name_user Varchar (300) NOT NULL,
  image_path_user Varchar (1000) NOT NULL,
  id_team Int NOT NULL,
  CONSTRAINT user_PK PRIMARY KEY (id_user),
  CONSTRAINT user_team_FK FOREIGN KEY (id_team) REFERENCES team(id_team)
) ENGINE = InnoDB;
#------------------------------------------------------------
# Table: role
#------------------------------------------------------------
CREATE TABLE role(
  id_role Int Auto_increment NOT NULL,
  name_role Varchar (500) NOT NULL,
  CONSTRAINT role_PK PRIMARY KEY (id_role)
) ENGINE = InnoDB;
#------------------------------------------------------------
# Table: role_user
#------------------------------------------------------------
CREATE TABLE role_user(
  id_role Int NOT NULL,
  id_user Int NOT NULL,
  CONSTRAINT role_user_PK PRIMARY KEY (id_role, id_user),
  CONSTRAINT role_user_role_FK FOREIGN KEY (id_role) REFERENCES role(id_role),
  CONSTRAINT role_user_user0_FK FOREIGN KEY (id_user) REFERENCES user(id_user)
) ENGINE = InnoDB;