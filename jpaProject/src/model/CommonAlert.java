package model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the common_alert database table.
 * 
 */
@Entity
@Table(name="common_alert")
@NamedQuery(name="CommonAlert.findAll", query="SELECT c FROM CommonAlert c")
public class CommonAlert implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer alertid;

	private Boolean acked;

	private String appsrc;

	private String classification;

	@Temporal(TemporalType.DATE)
	private Date created;

	private String details;

	private String receipient;

	private String title;

	//bi-directional one-to-one association to GeoAlert
	@OneToOne(mappedBy="commonAlert")
	private GeoAlert geoAlert;

	public CommonAlert() {
	}

	public Integer getAlertid() {
		return this.alertid;
	}

	public void setAlertid(Integer alertid) {
		this.alertid = alertid;
	}

	public Boolean getAcked() {
		return this.acked;
	}

	public void setAcked(Boolean acked) {
		this.acked = acked;
	}

	public String getAppsrc() {
		return this.appsrc;
	}

	public void setAppsrc(String appsrc) {
		this.appsrc = appsrc;
	}

	public String getClassification() {
		return this.classification;
	}

	public void setClassification(String classification) {
		this.classification = classification;
	}

	public Date getCreated() {
		return this.created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public String getDetails() {
		return this.details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getReceipient() {
		return this.receipient;
	}

	public void setReceipient(String receipient) {
		this.receipient = receipient;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public GeoAlert getGeoAlert() {
		return this.geoAlert;
	}

	public void setGeoAlert(GeoAlert geoAlert) {
		this.geoAlert = geoAlert;
	}

}