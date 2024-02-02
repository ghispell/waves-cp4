CREATE TABLE `user` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `level` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `admin` BOOLEAN
);

CREATE TABLE `session` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `date` DATE,
  `time` TIME,
  `location` VARCHAR(255) NOT NULL,
  `surf_level` VARCHAR(255) NOT NULL,
  `userId` INT NOT NULL,
  CONSTRAINT `user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)
);

CREATE TABLE `session_participation` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `user_id` INT NOT NULL,
  `session_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_session_participation_user` (`user_id`),
  KEY `fk_session_participation_session` (`session_id`),
  CONSTRAINT `fk_session_participation_user` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
  CONSTRAINT `fk_session_participation_session` FOREIGN KEY (`session_id`) REFERENCES `session`(`id`)
);
