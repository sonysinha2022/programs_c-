package dao;

import java.sql.SQLException;
import java.util.List;
import pojo.Candidate;

public interface CandidateDao {

	//add a method to get all candidates.
	List<Candidate> getAllCandidates() throws SQLException;
	
	//add a method to increment vote.
	String incrementVotes(int id) throws SQLException;
 
	
}
