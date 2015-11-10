package model;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the "WatchBox" database table.
 * 
 */
@Entity
@Table(name="\"WatchBox\"")
@NamedQuery(name="WatchBox.findAll", query="SELECT w FROM WatchBox w")
public class WatchBox implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="\"WATCHBOX_ID\"")
	private String watchboxId;

	private Boolean active;

	private Timestamp created;

	@Column(name="\"displayRules\"")
	private String displayRules;

	private String feature;

	private String group;

	private String owner;

	private String title;

	private Long version;

	public WatchBox() {
	}

	public String getWatchboxId() {
		return this.watchboxId;
	}

	public void setWatchboxId(String watchboxId) {
		this.watchboxId = watchboxId;
	}

	public Boolean getActive() {
		return this.active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Timestamp getCreated() {
		return this.created;
	}

	public void setCreated(Timestamp created) {
		this.created = created;
	}

	public String getDisplayRules() {
		return this.displayRules;
	}

	public void setDisplayRules(String displayRules) {
		this.displayRules = displayRules;
	}

	public String getFeature() {
		return this.feature;
	}

	public void setFeature(String feature) {
		this.feature = feature;
	}

	public String getGroup() {
		return this.group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getOwner() {
		return this.owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getVersion() {
		return this.version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

}