class hardwareSet:

    #intial values
    checkedOut = 0
    

    
    def _init_(self):
        self.name: str = ''
        self.capacity: int = 0
        self.availability: int = 0

    def initialize_capacity(self,qty):
        self.capacity = qty
        self.availability = qty
        checkedOut = 0
        

    def get_capacity(self):
        #
        return self.capacity
    def initialize_capacity(self,qty):
        self.capacity = qty
        self.availability = qty
    
    def get_availability(self):
        return self.availability

    def check_out(self, qty):

        if qty > self.availability:
            if (self.availability - qty) < 0:
                self.checkedOut = self.checkedOut + self.availability
                self.availability = 0
                return -1
        else : 
            self.availability -= qty
            self.checkedOut = self.checkedOut + qty
            return 0
        


    def check_in(self, qty):
        self.availability += qty

    def get_checkedout_qty(self):
        return self.checkedOut

    def set_capacity(self, cap):
        # if cap < self.capacity:
        #     self.availability = self.availability - (self.capacity - cap)
        #     if self.availability < 0:
        #         self.availability = 0
        
        # if cap >= self.capacity:
        #     self.availability = self.availability + (cap - self.capacity)
        self.capacity = cap