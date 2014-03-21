CREATE TABLE `counts` (
  `team` varchar(50) NOT NULL COMMENT '	',
  `bucket` varchar(50) NOT NULL COMMENT '	',
  `date` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `total_active` int(11) NOT NULL DEFAULT '0',
  `new` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `index1` (`team`,`bucket`,`date`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `counts_latest` (
  `team` varchar(50) NOT NULL COMMENT '	',
  `bucket` varchar(50) NOT NULL COMMENT '	',
  `date` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `total_active` int(11) NOT NULL DEFAULT '0',
  `new` int(11) NOT NULL DEFAULT '0',
  UNIQUE KEY `index1` (`team`,`bucket`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
