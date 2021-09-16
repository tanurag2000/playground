#include <iostream>

using namespace std;

int fact(int n){
    if(n==0){
        return 1;   }
    return n*fact(n-1);  
}
int main()
{
    int n,r,n1,r1,num1,num2;
    cin>>n >>r >>n1 >>r1;
    num1= fact(n)/(fact(r)*fact(n-r));
    num2=fact(n1)/(fact(r1)*fact(n1-r1));
    cout<<num1*num2;
    return 0;
}
