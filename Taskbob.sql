CREATE DATABASE IF NOT EXISTS angularcode;

USE angularcode;

--
-- Table structure for table `customers_auth`
--

CREATE TABLE IF NOT EXISTS `customers_auth` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `address` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

--
-- Dumping data for table `customers_auth`
--
INSERT INTO `customers_auth` (`uid`, `name`, `email`, `phone`, `password`, `address`, `type`,`created`) VALUES
(1, 'vishwanatha', 'vishwackh89@gmail.com', '9986552521', '$2a$10$51755504713a5514401a8u8lAz23UpV3vt1XDot031sidMRu3VdQ2', 'bangalore', 'admin', now());

--
-- Table structure for table `homeCat`
--

CREATE TABLE IF NOT EXISTS `homeCat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catgoryname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `cartcount` int(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
--
-- Dumping data for table `homeCat`
--
INSERT INTO `homeCat` (`id`,`catgoryname`,`name`, `type`, `cartcount`,`created`) VALUES 
(1,'livingroom','Fan Ceilling','select',0,now());


--
-- Table structure for table `applianceCat`
--
CREATE TABLE IF NOT EXISTS `applianceCat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catgoryname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `cartcount` int(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1000 ;
--
-- Dumping data for table `applianceCat`
--
INSERT INTO `applianceCat` (`id`,`catgoryname`,`name`, `type`, `cartcount`,`created`) VALUES 
(1000,'KITCHEN APPLIANCES ','Deep fryer','select',0,now());

--
-- Table structure for table `furnitureCat`
--
CREATE TABLE IF NOT EXISTS `furnitureCat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catgoryname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `cartcount` int(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2000 ;
--
-- Dumping data for table `furnitureCat`
--
INSERT INTO `furnitureCat` (`id`,`catgoryname`,`name`, `type`, `cartcount`,`created`) VALUES 
(2000,'sofas','Sofa cum Beds','select',0,now());

--
-- Table structure for table `vehicleCat`
--
CREATE TABLE IF NOT EXISTS `vehicleCat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catgoryname` varchar(100) NOT NULL, 
  `name` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `cartcount` int(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3000 ;
--
-- Dumping data for table `vehicleCat`
--
INSERT INTO `vehicleCat` (`id`,`catgoryname`,`name`, `type`, `cartcount`,`created`) VALUES 
(3000,'vehicle','Fan Ceilling','select',0,now());

/*Location */
CREATE TABLE locationEntity(
  `id` int not null AUTO_INCREMENT,
  `name` varchar(256) not null,
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  UNIQUE KEY(name)
);
/*Travel Service Categories*/
CREATE TABLE TravelServiceEntity(
  `id` int not null AUTO_INCREMENT,
  `name` varchar(50) not null,
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  UNIQUE KEY(name)
    );
/*Vendor sigup*/
CREATE TABLE VendorEntity(
  `id` int not null AUTO_INCREMENT,
  `name` varchar(50) not null,
  `pannumber` varchar(60) not null,
  `emailId` varchar(60) not null,
  `mobilenumber` varchar(13) not null,
  `address` varchar(100),
  `area` varchar(60),
  `city` varchar(60),
  `locationId` int,
  `states` varchar(60),
  `pincode` varchar(10),
  `password` varchar(200),
  `status` varchar(60) not null,
  `createdDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  UNIQUE KEY(pannumber),
  UNIQUE KEY(emailId),
  UNIQUE KEY(mobilenumber)
);