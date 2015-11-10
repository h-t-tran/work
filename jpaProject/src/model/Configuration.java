package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the "Configuration" database table.
 * 
 */
@Entity
@Table(name="\"Configuration\"")
@NamedQuery(name="Configuration.findAll", query="SELECT c FROM Configuration c")
public class Configuration implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="\"CONFIGURATION_ID\"")
	private String configurationId;

	private String description;

	private String key;

	private String value;

	public Configuration() {
	}

	public String getConfigurationId() {
		return this.configurationId;
	}

	public void setConfigurationId(String configurationId) {
		this.configurationId = configurationId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getKey() {
		return this.key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}