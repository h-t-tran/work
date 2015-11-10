package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the geo_alert database table.
 * 
 */
@Entity
@Table(name="geo_alert")
@NamedQuery(name="GeoAlert.findAll", query="SELECT g FROM GeoAlert g")
public class GeoAlert implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer id;

	private String featureid;

	private double lat;

	private double lon;

	//bi-directional one-to-one association to CommonAlert
	@OneToOne
	@JoinColumn(name="id")
	private CommonAlert commonAlert;

	public GeoAlert() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFeatureid() {
		return this.featureid;
	}

	public void setFeatureid(String featureid) {
		this.featureid = featureid;
	}

	public double getLat() {
		return this.lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLon() {
		return this.lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public CommonAlert getCommonAlert() {
		return this.commonAlert;
	}

	public void setCommonAlert(CommonAlert commonAlert) {
		this.commonAlert = commonAlert;
	}

}