package dao;

import java.sql.*;
import java.util.List;
import java.util.ArrayList;
import pojo.Candidate;

import static utils.DBUtils.*;

public class CandidateDaoImpl implements CandidateDao {
	private Connection cn;
	private PreparedStatement pst1, pst2, pst3;

	// def ctor
	public CandidateDaoImpl() throws SQLException {
		// establish cn.
		cn = openConnection();
		// String sql="select * from candidates";
		// pst1 for displaying all candidates.
		pst1 = cn.prepareStatement("select * from candidates");

		pst2 = cn.prepareStatement("update candidates set votes=votes+1 where id=?");

		pst3 = cn.prepareStatement(
				"select * from candidates where votes=(select max(votes) from candidates) order by id limit 2 ");

	}

	// 1. display all candidates.
	@Override
	public List<Candidate> getAllCandidates() throws SQLException {

		// create empty list.
		List<Candidate> candidateList = new ArrayList<>();
		try (ResultSet rst = pst1.executeQuery()) {
			while (rst.next()) {
				// int candidateId, String name, String party, int votes
				candidateList.add(new Candidate(rst.getInt(1), rst.getString(2), rst.getString(3), rst.getInt(4)));
			}
		}
		return candidateList;
	}

	// 2. increment votes.
	@Override
	public String incrementVotes(int id) throws SQLException {
		// set IN params

		pst2.setInt(1, id);
		int count = pst2.executeUpdate();
		if (count == 1)
			return " successfully updated";
		return "failed";

	}

	// 3.Display details of top 2 candidates , having max votes
	public List<Candidate> maxVotes() throws SQLException {
		// create empty list.
		List<Candidate> candidateList = new ArrayList<>();
		try (ResultSet rst = pst1.executeQuery()) {
			while (rst.next()) {
				candidateList.add(new Candidate(rst.getInt(1), rst.getString(2), rst.getString(3), rst.getInt(4)));

			}
		}
		return candidateList;

	}

	// add a cleanUp method :to clean up the resources
	public void cleanUp() throws SQLException {
		if (pst1 != null)
			pst1.close();
		if (pst2 != null)
			pst2.close();

		closeConnection();
		System.out.println("Candidate dao cleaned up");
	}

}
