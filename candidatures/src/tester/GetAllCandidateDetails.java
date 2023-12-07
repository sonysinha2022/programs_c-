package tester;
import java.util.Scanner;

import dao.CandidateDaoImpl;


public class GetAllCandidateDetails {
	public static void main(String[]args) {
		try(Scanner sc=new Scanner(System.in)){
			//create CandidateDaoImpl instance 
			CandidateDaoImpl candidateDao= new CandidateDaoImpl();
			
			//1.get all candidates.
			candidateDao.getAllCandidates().forEach(a->System.out.println(a));
			
			//clean up
			candidateDao.cleanUp();
			
			
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	

}
