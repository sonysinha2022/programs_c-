package tester;


import java.util.Scanner;

import dao.CandidateDaoImpl;

import static utils.DBUtils.*;
public class IncrementID {
	public static void main(String[] args) {
		try(Scanner sc=new Scanner(System.in)){
			//create CandidateDao instance.
			CandidateDaoImpl candidateDao=new CandidateDaoImpl();
			System.out.println("Enter candidate ID");
			System.out.println(candidateDao.incrementVotes(sc.nextInt()));
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}

}
