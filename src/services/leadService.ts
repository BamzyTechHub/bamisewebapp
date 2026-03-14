import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
  source: string;
}

export const LeadService = {
  async submitLead(data: LeadData) {
    try {
      const leadsRef = collection(db, 'leads');
      await addDoc(leadsRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
      return { success: true };
    } catch (error) {
      console.error('Error submitting lead:', error);
      throw error;
    }
  }
};
