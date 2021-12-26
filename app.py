from flask import Flask,request,render_template,url_for
import pickle
import sklearn

logmodel=pickle.load(open("logmodel.pickle","rb"))

app=Flask(__name__)
@app.route("/",methods=['GET','POST'])
def homepage():
    if request.method=="GET":
        return render_template("index.html")

@app.route("/home/",methods=['GET','POST'])
def home():
    if request.method=="GET":
        return render_template("hello.html")

    if request.method=="POST":
        cond=request.form.getlist('ques')
        print(cond)
        newlist=[]
        for i in range(1,16):
            if str(i) in cond:
                newlist.append(True)
            else:
                newlist.append(False)
        
        '''print(newlist)
        print('total features ',len(newlist))'''
        r=int(logmodel.predict([newlist]))
        '''fields=['fever', 'dry cough', 'tiredness', 'aches', 'pains', 'sore throat',
       'diarrhoea', 'conjuctivits', 'headache', 'loss of taste or smell',
       'rash on skin', 'dicolouration of fingers or toes',
       'difficulty in breathing', 'chest pain', 'loss of speech or movement']
        combo=zip(fields,newlist)'''
        if r==0:
            return render_template("index9.html")
        else:
            return render_template("indeeex.html")
        
if __name__ == "__main__":
    app.run(debug=True)