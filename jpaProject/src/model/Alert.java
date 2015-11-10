package model;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the "Alert" database table.
 * 
 */
@Entity
@Table(name="\"Alert\"")
@NamedQuery(name="Alert.findAll", query="SELECT a FROM Alert a")
public class Alert implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="\"ALERT_ID\"")
	private String alertId;

	private Boolean acknowledged;

	private Timestamp created;

	@Column(name="\"featureId\"")
	private String featureId;

	@Column(name="\"featureName\"")
	private String featureName;

	@Column(name="\"featureSource\"")
	private String featureSource;

	private String recipient;

	@Column(name="\"watchBoxId\"")
	private String watchBoxId;

	@Column(name="\"watchBoxOwner\"")
	private String watchBoxOwner;

	@Column(name="\"watchBoxTitle\"")
	private String watchBoxTitle;

	@Column(name="\"wktLocation\"")
	private String wktLocation;

	public Alert() {
	}

	public String getAlertId() {
		return this.alertId;
	}

	public void setAlertId(String alertId) {
		this.alertId = alertId;
	}

	public Boolean getAcknowledged() {
		return this.acknowledged;
	}

	public void setAcknowledged(Boolean acknowledged) {
		this.acknowledged = acknowledged;
	}

	public Timestamp getCreated() {
		return this.created;
	}

	public void setCreated(Timestamp created) {
		this.created = created;
	}

	public String getFeatureId() {
		return this.featureId;
	}

	public void setFeatureId(String featureId) {
		this.featureId = featureId;
	}

	public String getFeatureName() {
		return this.featureName;
	}

	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}

	public String getFeatureSource() {
		return this.featureSource;
	}

	public void setFeatureSource(String featureSource) {
		this.featureSource = featureSource;
	}

	public String getRecipient() {
		return this.recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getWatchBoxId() {
		return this.watchBoxId;
	}

	public void setWatchBoxId(String watchBoxId) {
		this.watchBoxId = watchBoxId;
	}

	public String getWatchBoxOwner() {
		return this.watchBoxOwner;
	}

	public void setWatchBoxOwner(String watchBoxOwner) {
		this.watchBoxOwner = watchBoxOwner;
	}

	public String getWatchBoxTitle() {
		return this.watchBoxTitle;
	}

	public void setWatchBoxTitle(String watchBoxTitle) {
		this.watchBoxTitle = watchBoxTitle;
	}

	public String getWktLocation() {
		return this.wktLocation;
	}

	public void setWktLocation(String wktLocation) {
		this.wktLocation = wktLocation;
	}

}