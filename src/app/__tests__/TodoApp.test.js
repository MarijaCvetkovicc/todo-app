import { deleteTodoTask } from '../components/TodoApp/TodoApp';

describe('Testing deleteTodoTask',()=>{

    it('firts element',()=>{
        const arr=['1','2','3','4','5'];
        const result=deleteTodoTask(arr,0);
        expect(result.length).toBe(4);
        expect(result[0]).toBe('2');
    });
    it('Middle element',()=>{
        const arr=["a","b","c","d","e"];
        const result=deleteTodoTask(arr,2);
        expect(result.length).toBe(4);
        expect(result[2]).toBe('d');

    });
    it('Last element',()=>{
        const arr=["a","b","c","d","e"];
        const result=deleteTodoTask(arr,4);
        expect(result[3]).toBe('d');

    });


});


