import { Injectable } from '@nestjs/common';
import { getEnvironmentData } from 'worker_threads';
import firestore from './utils/firebase';
import 'firebase/compat/firestore';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getdata(): any {
    const data = firestore.collection("config").orderBy("id").get()
      .then(function (snapshot) {
        snapshot.forEach((docs) => {
          console.log(docs.id,docs.data());
        })
      });
    return data;
  }

  create(dataDto): any {
    firestore.collection("config").add({
      description: dataDto.description,
      id: dataDto.id
    });
    return "succes Create";
  }

  createSet(specificid, dataDto): any {
    firestore.collection("config").doc(specificid).set({
      decription: dataDto.description,
      id: dataDto.id
    })
  }
}
