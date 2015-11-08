drop table geo_alert;
drop table common_alert;

CREATE TABLE common_alert (
    alertid          	integer PRIMARY KEY,
    title       	varchar(255) NOT NULL,
    created  		date NOT NULL,
    receipient  	varchar(255) NOT NULL,
    classification   	varchar(255) NOT NULL,
    appsrc       	varchar(255) NOT NULL,
    acked		BOOLEAN NOT NULL
);


CREATE TABLE geo_alert (
    id          	integer PRIMARY KEY REFERENCES common_alert (alertid),
    featureid       	varchar(255) NOT NULL,
    lat  		FLOAT NOT NULL,
    lon  		FLOAT NOT NULL
);

insert into common_alert (alertid, title, created, receipient, classification, appsrc, acked)
	    VALUES (1,'title', 'Jan-10-1999', 'receipient', 'secret','app1', true);
insert into common_alert (alertid, title, created, receipient, classification, appsrc, acked)
	    VALUES (2,'title2', 'Jan-11-1999', 'receipient2', 'secret','app2', true);
insert into geo_alert (id, featureid, lat, lon)
	    VALUES (1, 'feature1', 10, -20);
insert into geo_alert (id, featureid, lat, lon)
	    VALUES (2, 'feature10', 11, -21);

select * from common_alert;
select * from geo_alert;